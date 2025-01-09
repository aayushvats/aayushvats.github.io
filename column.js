let gridState = 0; // 0: hidden, 1: grid only, 2: grid + info
let showHorizontalLines = false; // Toggle horizontal lines on or off
let layerState = false; // Toggle between layer, true = vdg false = column
let currentGrid = 0; // 0: Van de Graaf, 1: Diagonals with cross, 2: Split screen with identical grids
let canvas, ctx;

const settings = {
    desktop: {
        columns: 12,
        gutterWidth: 20,
        marginWidth: 150,
        horizontalSpacing: '1em',
    },
    mobile: {
        columns: 10,
        gutterWidth: 20,
        marginWidth: 0,
        horizontalSpacing: '1em',
    },
    breakpoint: 450,
    lineColors: {
        columns: 'rgba(255, 0, 0, 0.5)',
        lines: 'rgba(0, 0, 255, 0.5)',
        diagonals: 'rgba(255, 0, 0, 0.5)',
        others: 'rgba(0, 0, 255, 0.5)',
    }
};

// Create and configure the canvas element
function createCanvas() {
    canvas = document.createElement('canvas');
    canvas.id = 'gridDesign';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
}

// Remove the canvas element
function removeCanvas() {
    if (canvas) {
        document.body.removeChild(canvas);
        canvas = null;
        ctx = null;
    }
}

// Convert spacing to pixels
function convertSpacingToPixels(spacing) {
    if (spacing.endsWith('px')) {
        return parseInt(spacing, 10);
    } else if (spacing.endsWith('em')) {
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return parseFloat(spacing) * fontSize;
    }
    return parseInt(spacing, 10); // Default to pixel value if no unit is specified
}

// Draw the grid
function drawGrid() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const isMobile = viewportWidth < settings.breakpoint;
    const numColumns = isMobile ? settings.mobile.columns : settings.desktop.columns;
    const gutterWidth = isMobile ? settings.mobile.gutterWidth : settings.desktop.gutterWidth;
    const marginWidth = isMobile ? settings.mobile.marginWidth : settings.desktop.marginWidth;
    const horizontalSpacing = convertSpacingToPixels(isMobile ? settings.mobile.horizontalSpacing : settings.desktop.horizontalSpacing);
    const totalWidth = viewportWidth - 2 * marginWidth;

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const columnWidth = (totalWidth - (numColumns - 1) * gutterWidth) / numColumns;
    const startX = marginWidth;

    ctx.fillStyle = settings.lineColors.columns;

    for (let i = 0; i < numColumns; i++) {
        const x = startX + i * (columnWidth + gutterWidth);
        ctx.fillRect(x, 0, columnWidth, viewportHeight);
    }

    if (showHorizontalLines) {
        ctx.strokeStyle = settings.lineColors.lines;
        ctx.lineWidth = 1;
        for (let y = 0; y <= viewportHeight; y += horizontalSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(viewportWidth, y);
            ctx.stroke();
        }
    }

    if (gridState === 2) {
        drawGridInfo(viewportWidth, viewportHeight, numColumns, gutterWidth, marginWidth, horizontalSpacing, isMobile);
    }
}

// Draw a part of the grid with specified dimensions
function drawGridPart(startX, endX, height) {
    ctx.strokeStyle = settings.lineColors.diagonals;

    // Diagonals
    ctx.beginPath();
    ctx.moveTo(startX, 0);
    ctx.lineTo(endX, height);
    ctx.moveTo(endX, 0);
    ctx.lineTo(startX, height);
    ctx.stroke();

    ctx.strokeStyle = settings.lineColors.others;

    // Top corners to bottom center
    ctx.beginPath();
    ctx.moveTo(startX, 0);
    ctx.lineTo((startX + endX) / 2, height);
    ctx.moveTo(endX, 0);
    ctx.lineTo((startX + endX) / 2, height);
    ctx.stroke();

    // Bottom corners to top center
    ctx.beginPath();
    ctx.moveTo(startX, height);
    ctx.lineTo((startX + endX) / 2, 0);
    ctx.moveTo(endX, height);
    ctx.lineTo((startX + endX) / 2, 0);
    ctx.stroke();
}

// Calculate the intersection point of two lines
function getIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
    return { x, y };
}

// Draw the Van de Graaf grid
function drawVanDeGraafGrid() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = settings.lineColors.diagonals;
    ctx.lineWidth = 1;

    // Line a: Top-left to bottom-right diagonal
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(viewportWidth, viewportHeight);
    ctx.stroke();

    // Line b: Top-right to bottom-left diagonal
    ctx.beginPath();
    ctx.moveTo(viewportWidth, 0);
    ctx.lineTo(0, viewportHeight);
    ctx.stroke();

    ctx.strokeStyle = settings.lineColors.others;

    // Line c: Vertical center line
    ctx.beginPath();
    ctx.moveTo(viewportWidth / 2, 0);
    ctx.lineTo(viewportWidth / 2, viewportHeight);
    ctx.stroke();

    // Line d: Bottom-right to top-center
    ctx.beginPath();
    ctx.moveTo(viewportWidth, viewportHeight);
    ctx.lineTo(viewportWidth / 2, 0);
    ctx.stroke();

    // Line e: Bottom-left to top-center
    ctx.beginPath();
    ctx.moveTo(0, viewportHeight);
    ctx.lineTo(viewportWidth / 2, 0);
    ctx.stroke();

    // Intersection points
    const intersectAE = getIntersection(0, 0, viewportWidth, viewportHeight, 0, viewportHeight, viewportWidth / 2, 0);
    const intersectBD = getIntersection(viewportWidth, 0, 0, viewportHeight, viewportWidth, viewportHeight, viewportWidth / 2, 0);

    // Line f: Intersection of line a and e upwards
    ctx.beginPath();
    ctx.moveTo(intersectAE.x, intersectAE.y);
    ctx.lineTo(intersectAE.x, 0);
    ctx.stroke();

    // Line g: Intersection of line b and d upwards
    ctx.beginPath();
    ctx.moveTo(intersectBD.x, intersectBD.y);
    ctx.lineTo(intersectBD.x, 0);
    ctx.stroke();

    // Line from intersection of a and e to the top of line g
    ctx.beginPath();
    ctx.moveTo(intersectAE.x, intersectAE.y);
    ctx.lineTo(intersectBD.x, 0);
    ctx.stroke();

    // Line from intersection of b and d to the top of line f
    ctx.beginPath();
    ctx.moveTo(intersectBD.x, intersectBD.y);
    ctx.lineTo(intersectAE.x, 0);
    ctx.stroke();

    if (gridState === 2) {
        drawGridInfo(viewportWidth, viewportHeight);
    }
}

// Draw a grid with full width diagonal and half diagonals
function drawDiagonalWithCross() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = settings.lineColors.diagonals;
    ctx.lineWidth = 1;

    // Line a: Top-left to bottom-right diagonal
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(viewportWidth, viewportHeight);
    ctx.stroke();

    // Line b: Top-right to bottom-left diagonal
    ctx.beginPath();
    ctx.moveTo(viewportWidth, 0);
    ctx.lineTo(0, viewportHeight);
    ctx.stroke();

    ctx.strokeStyle = settings.lineColors.others;

    // Line d: Bottom-right to top-center
    ctx.beginPath();
    ctx.moveTo(viewportWidth, viewportHeight);
    ctx.lineTo(viewportWidth / 2, 0);
    ctx.stroke();

    // Line e: Bottom-left to top-center
    ctx.beginPath();
    ctx.moveTo(0, viewportHeight);
    ctx.lineTo(viewportWidth / 2, 0);
    ctx.stroke();

    // Reverse Line d: Top-right to bottom-center
    ctx.beginPath();
    ctx.moveTo(viewportWidth, 0);
    ctx.lineTo(viewportWidth / 2, viewportHeight);
    ctx.stroke();

    // Reverse Line e: Top-left to bottom-center
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(viewportWidth / 2, viewportHeight);
    ctx.stroke();

    if (gridState === 2) {
        drawGridInfo(viewportWidth, viewportHeight);
    }
}

// Draw a split screen grid with identical grids on both sides
function drawSplitScreenGrid() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    canvas.width = viewportWidth;
    canvas.height = viewportHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = settings.lineColors.others;
    ctx.lineWidth = 1;

    // Vertical center line
    ctx.beginPath();
    ctx.moveTo(viewportWidth / 2, 0);
    ctx.lineTo(viewportWidth / 2, viewportHeight);
    ctx.stroke();

    // Draw left side
    drawGridPart(0, viewportWidth / 2, viewportHeight);

    // Draw right side
    drawGridPart(viewportWidth / 2, viewportWidth, viewportHeight);

    if (gridState === 2) {
        drawGridInfo(viewportWidth, viewportHeight);
    }
}

// Draw grid information on the canvas
function drawGridInfo(viewportWidth, viewportHeight, numColumns, gutterWidth, marginWidth, horizontalSpacing, isMobile) {
    const totalGrids = 3;
    const currentGridIndex = currentGrid + 1;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(viewportWidth - 220, 10, 210, 130);

    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';

    if (!layerState) {
        ctx.fillText(`Columns: ${numColumns}`, viewportWidth - 210, 30);
        ctx.fillText(`Gutter Width: ${gutterWidth}px`, viewportWidth - 210, 50);
        ctx.fillText(`Margin Width: ${marginWidth}px`, viewportWidth - 210, 70);
        ctx.fillText(`Horizontal Spacing: ${horizontalSpacing}px`, viewportWidth - 210, 90);
        ctx.fillText(`Breakpoint: ${settings.breakpoint}px`, viewportWidth - 210, 110);
        ctx.fillText(`Viewport: ${isMobile ? 'Mobile' : 'Desktop'}`, viewportWidth - 210, 130);
    } else {
        ctx.fillText(`Viewport Width: ${viewportWidth}px`, viewportWidth - 210, 30);
        ctx.fillText(`Viewport Height: ${viewportHeight}px`, viewportWidth - 210, 50);
        ctx.fillText(`Breakpoint: ${settings.breakpoint}px`, viewportWidth - 210, 70);
        ctx.fillText(`Viewport: ${viewportWidth < settings.breakpoint ? 'Mobile' : 'Desktop'}`, viewportWidth - 210, 90);
        ctx.fillText(`Grid: ${currentGridIndex} of ${totalGrids}`, viewportWidth - 210, 110);
    }
}

// Draw the current grid based on the selected type
function drawCurrentGrid() {
    if (currentGrid === 0) {
        drawVanDeGraafGrid();
    } else if (currentGrid === 1) {
        drawDiagonalWithCross();
    } else if (currentGrid === 2) {
        drawSplitScreenGrid();
    }
}

// Cycle through different grid types
function cycleGrid() {
    currentGrid = (currentGrid + 1) % 3;
    if (gridState === 1 || gridState === 2) {
        drawCurrentGrid();
    }
}

// Toggle the grid display state
function toggleGrid() {
    gridState = (gridState + 1) % 3;
    if (gridState === 1 || gridState === 2) {
        if (!canvas) {
            createCanvas();
        }
        if (!layerState) {
            drawGrid();
        } else {
            drawCurrentGrid();
        }
    } else {
        removeCanvas();
    }
}

// Toggle the display of horizontal lines
function toggleHorizontalLines() {
    showHorizontalLines = !showHorizontalLines;
    if (gridState === 1 || gridState === 2) {
        drawGrid();
    }
}

// Event listeners for key presses and window resize
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'g') { // toggle grid
        event.preventDefault();
        toggleGrid();
    } else if (event.ctrlKey && event.key === 'k') { // cycle between options
        event.preventDefault();
        if (!layerState) {
            toggleHorizontalLines();
        } else {
            cycleGrid();
        }
    } else if (event.ctrlKey && event.key === 'l') { // cycle between grid
        event.preventDefault();
        gridState === 1 ? gridState = 0 : gridState = 1;
        layerState = !layerState;
        toggleGrid();
    }
});

window.addEventListener('resize', function() {
    if (gridState === 1 || gridState === 2) {
        if (!layerState) {
            drawGrid();
        } else {
            drawCurrentGrid();
        }
    }
});