'use client'

const CalloutTag = ({ text, dots = 2, tailDirection = "right", className = "" }) => {
  const isRight = tailDirection === "right";

  return (
    <div
      className={`absolute z-10 flex flex-col pointer-events-none select-none ${
        isRight ? "items-start" : "items-end"
      } ${className}`}
    >
      <span
        className="rounded-full bg-white whitespace-nowrap font-main font-medium text-[#6a6a6a]"
        style={{
          fontSize: "clamp(0.45rem, 1.1cqw, 0.8rem)",
          padding: "clamp(0.3rem, 0.7cqw, 0.5rem) clamp(0.55rem, 1.3cqw, 0.9rem)",
        }}
      >
        {text}
      </span>

      <div
        className={`flex flex-col ${isRight ? "items-start" : "items-end"}`}
        style={{
          gap: "clamp(0.15rem, 0.3cqw, 0.3rem)",
          marginTop: "clamp(0.35rem, 0.6cqw, 0.6rem)",
          marginLeft: isRight ? "clamp(0.6rem, 1.3cqw, 1.25rem)" : 0,
          marginRight: isRight ? 0 : "clamp(0.6rem, 1.4cqw, 2rem)",
        }}
      >
        <span
          className="rounded-full bg-white/70"
          style={{
            width: "clamp(0.3rem, 0.4cqw, 0.4rem)",
            height: "clamp(0.3rem, 0.4cqw, 0.4rem)",
          }}
        />
        {dots === 2 && (
          <span
            className="rounded-full bg-white/40"
            style={{
              width: "clamp(0.2rem, 0.3cqw, 0.3rem)",
              height: "clamp(0.2rem, 0.3cqw, 0.3rem)",
              marginLeft: isRight ? "clamp(0.3rem, 0.6cqw, 0.95rem)" : 0,
              marginRight: isRight ? 0 : "clamp(0.3rem, 0.6cqw, 0.95rem)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CalloutTag;