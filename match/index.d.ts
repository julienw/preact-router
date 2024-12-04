import * as preact from 'preact';

import { Link as StaticLink, RoutableProps } from '..';

export class Match extends preact.Component<RoutableProps, {}> {
	render(): preact.VNode;
}

// Typescript doesn't allow to extends directly from an expression (see
// https://github.com/microsoft/TypeScript/issues/31843). Assigning to a
// separate type first makes it work.
type AnchorElement = preact.JSX.IntrinsicElements['a'];
export interface LinkProps extends AnchorElement {
	activeClassName?: string;
	children?: preact.ComponentChildren;
}

export function Link(props: LinkProps): preact.VNode;

export default Match;
