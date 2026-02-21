import type { ChildNode, Rule, AtRule, Declaration } from 'postcss';

export function isRule(node: ChildNode): node is Rule {
  return node.type === 'rule';
}

export function isAtRule(node: ChildNode): node is AtRule {
  return node.type === 'atrule';
}

export function isDeclaration(node: ChildNode): node is Declaration {
  return node.type === 'decl';
}
