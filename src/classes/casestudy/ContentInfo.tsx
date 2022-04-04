import React from "react";

export class ContentInfo {
    colorCode: string;
    textOnly?: boolean;
    problem?: boolean;
    children: React.ReactNode;

    constructor(colorCode: string, textOnly = false, problem = false, children: React.ReactNode) {
        this.colorCode = colorCode;
        this.textOnly = textOnly;
        this.problem = problem;
        this.children = children;
    }
}