import React from "react";

interface PlaylistProps {
  songs: string[];
}

export function Playlist({ songs: songs }: PlaylistProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-[22px] font-medium pb-5 font-medium">Playlist</h2>
      <p>Here are some of the podcasts that have made an impact on me, and tunes which drive late night builds</p>
      <ul className="list-disc pl-5 pt-2 space-y-2 text-[16px] text-muted-foreground">
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}
