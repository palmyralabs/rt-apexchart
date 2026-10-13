const modules = import.meta.glob('../components/**/*.tsx', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

const extractUsage = (src: string): string => {
    const startTag = '<div id="chart">';
    const start = src.indexOf(startTag);
    if (start === -1) return '';
    const endTag = '</div>';
    const end = src.indexOf(endTag, start);
    if (end === -1) return '';
    const raw = src.slice(start, end + endTag.length);
    const lines = raw.split('\n');
    const indents = lines
        .slice(1)
        .filter((l) => l.trim().length > 0)
        .map((l) => (l.match(/^ */) || [''])[0].length);
    const min = indents.length ? Math.min(...indents) : 0;
    return lines.map((l, i) => (i === 0 ? l : l.slice(min))).join('\n').trim();
};

const getChartSource = (name?: string): string => {
    if (!name) return '';
    const key = Object.keys(modules).find((k) => k.endsWith(`/${name}.tsx`));
    return key ? extractUsage(modules[key]) : '';
};

export { getChartSource };
