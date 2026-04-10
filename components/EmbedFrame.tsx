type EmbedFrameProps = {
  title: string;
  src: string;
};

export default function EmbedFrame({ title, src }: EmbedFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white/70">
      <div className="relative aspect-[16/10] w-full">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="clipboard-read; clipboard-write; fullscreen"
        />
      </div>
    </div>
  );
}
