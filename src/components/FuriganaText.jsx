/**
 * FuriganaText component
 * Syntax: 漢字{かんじ} -> <ruby>漢字<rt>かんじ</rt></ruby>
 */
export default function FuriganaText({ text, className = "" }) {
  if (!text) return null;

  // Regex to match "part{reading}"
  const regex = /([^{}\s]+)\{([^{}]+)\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Push the matched ruby component
    parts.push(
      <ruby key={match.index}>
        {match[1]}
        <rt className="select-none">{match[2]}</rt>
      </ruby>
    );

    lastIndex = regex.lastIndex;
  }

  // Push the remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return (
    <span className={`inline ${className}`}>
      {parts.length > 0 ? parts : text}
    </span>
  );
}
