export function runtimeGuidance(markdown, roleSection, path) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.indexOf('## Runtime advisory guidance');
  if (start === -1 || start !== lines.lastIndexOf('## Runtime advisory guidance')) throw new Error('Expected one runtime guidance section in ' + path);
  const next = lines.findIndex((line, index) => index > start && /^#{1,2} /.test(line));
  const section = lines.slice(start + 1, next === -1 ? lines.length : next);
  const roleHeadings = section.flatMap((line, index) => /^### /.test(line) ? [index] : []);
  let roleLines = section;
  if (roleSection) {
    const headings = roleHeadings.filter(index => section[index] === '### ' + roleSection);
    if (headings.length !== 1) throw new Error('Expected one role section in ' + path + ' for ' + roleSection);
    const roleEnd = roleHeadings.find(index => index > headings[0]) ?? section.length;
    roleLines = section.slice(headings[0] + 1, roleEnd);
  } else if (roleHeadings.length) {
    throw new Error('Unexpected nested role sections in ' + path);
  }
  const text = roleLines.join('\n').trim();
  if (!text.startsWith('- ') || Buffer.byteLength(text, 'utf8') > 2_400) throw new Error('Runtime guidance must be bounded nonempty bullets in ' + path);
  return text;
}

