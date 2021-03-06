export type Node = Document | Line | Inline;

// Document node
export class Document {
    public readonly nodeType = 'DOCUMENT';
    public lines: Line[];

    constructor(lines: Line[] = []) {
        this.lines = lines;
    }

    public addLine(line: Line): void {
        this.lines.push(line);
    }
}

// Line nodes
export type Line = Paragraph | Header | List;

export class Paragraph {
    public readonly nodeType = 'PARAGRAPH';
    public inlines: Inline[];

    constructor(inlines: Inline[] = []) {
        this.inlines = inlines;
    }

    public addInline(inline: Inline): void {
        this.inlines.push(inline);
    }
}

export class Header {
    public readonly nodeType = 'HEADER';
    public numHashes: number;
    public inlines: Inline[];

    constructor(numHashes: number, inlines: Inline[] = []) {
        this.numHashes = numHashes;
        this.inlines = inlines;
    }

    public addInline(inline: Inline): void {
        this.inlines.push(inline);
    }
}

export class List {
    public readonly nodeType = 'LIST';
    public isFirst: boolean;
    public isLast: boolean;
    public inlines: Inline[];

    constructor(isFirst: boolean = false, isLast: boolean = false, inlines: Inline[] = []) {
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.inlines = inlines;
    }

    public addInline(inline: Inline): void {
        this.inlines.push(inline);
    }
}

// Inline nodes
export type Inline = Text | Link;

export class Text {
    public readonly nodeType = 'TEXT';
    public text: string;

    constructor(text: string = '') {
        this.text = text;
    }

    public html(): string {
        return `<span>${this.text}</span>`;
    }
}

export class Link {
    public readonly nodeType = 'LINK';
    public text: string;
    public href: string;

    constructor(text: string = '', href: string = '') {
        this.text = text;
        this.href = href;
    }

    public html(): string {
        return `<a href="${this.href}">${this.text}</a>`;
    }
}
