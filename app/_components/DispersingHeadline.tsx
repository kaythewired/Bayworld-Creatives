import type { CSSProperties } from "react";

const headlineLines = [
  ["Creative", "work"],
  ["that", "helps", "brands"],
  ["stand", "out."],
];

const scatterPaths = [
  [-20, -13, -13], [15, -23, 11], [-29, 8, -9], [27, 17, 14], [-14, 24, -8],
  [23, -7, 9], [-25, -19, -15], [12, 26, 12], [-31, 13, -11], [30, -16, 15],
];

export function DispersingHeadline() {
  let letterIndex = 0;

  return (
    <h1 className="dispersing-headline" aria-label="Creative work that helps brands stand out.">
      {headlineLines.map((line, lineIndex) => (
        <span className={`dispersing-line${lineIndex === 2 ? " dispersing-line-accent" : ""}`} key={line.join("-")}>
          {line.map((word, wordIndex) => (
            <span className="dispersing-word" key={word}>
              {[...word].map((letter) => {
                const path = scatterPaths[letterIndex % scatterPaths.length];
                letterIndex += 1;
                return (
                  <span
                    className="dispersing-letter"
                    key={`${letter}-${letterIndex}`}
                    style={{ "--scatter-x": `${path[0]}px`, "--scatter-y": `${path[1]}px`, "--scatter-rotate": `${path[2]}deg` } as CSSProperties}
                  >
                    {letter}
                  </span>
                );
              })}
              {wordIndex < line.length - 1 && " "}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
