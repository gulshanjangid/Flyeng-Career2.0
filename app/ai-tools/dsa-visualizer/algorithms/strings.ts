import { Algorithm, VisualizationState } from './types';

export const stringAlgorithms: Algorithm[] = [
    {
        id: "valid-parentheses",
        name: "Valid Parentheses",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### Real-World Example
Code editors checking for matching brackets. Compilers parsing code.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(n).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `bool isValid(string s) {
    stack<char> stack;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') stack.push(c);
        else {
            if (stack.empty()) return false;
            if (c == ')' && stack.top() != '(') return false;
            if (c == '}' && stack.top() != '{') return false;
            if (c == ']' && stack.top() != '[') return false;
            stack.pop();
        }
    }
    return stack.empty();
}`,
            java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<Character>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,
            python: `def isValid(s):
    stack = []
    map = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in map:
            top_element = stack.pop() if stack else '#'
            if map[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack`,
            javascript: `var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (c !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};`
        },
        run: function* (initialData: any) {
            const s = typeof initialData === 'string' && initialData ? initialData : "{[]}";
            const stack: string[] = [];
            const map: Record<string, string> = {
                "(": ")",
                "[": "]",
                "{": "}"
            };

            // Map string chars to numbers for stack visualization (ASCII or arbitrary)
            // Or better, just visualize the stack logic conceptually
            // Since our stack visualization expects numbers, we might need to map chars to numbers
            // Let's map: (->1, )->-1, [->2, ]->-2, {->3, }->-3
            const charToNum: Record<string, number> = {
                '(': 1, ')': -1,
                '[': 2, ']': -2,
                '{': 3, '}': -3
            };

            yield {
                type: 'stack',
                stack: [],
                description: `Checking string: "${s}"`,
                operation: 'none'
            };

            for (let i = 0; i < s.length; i++) {
                const char = s[i];

                if (map[char]) {
                    stack.push(char);
                    yield {
                        type: 'stack',
                        stack: stack.map(c => charToNum[c]),
                        highlightIndex: stack.length - 1,
                        operation: 'push',
                        description: `Push open bracket '${char}' to stack`
                    };
                } else {
                    if (stack.length === 0) {
                        yield {
                            type: 'stack',
                            stack: [],
                            operation: 'none',
                            description: `Error: Found closing '${char}' but stack is empty. Invalid!`
                        };
                        return;
                    }

                    const top = stack[stack.length - 1];
                    if ((char === ')' && top === '(') ||
                        (char === ']' && top === '[') ||
                        (char === '}' && top === '{')) {
                        stack.pop();
                        yield {
                            type: 'stack',
                            stack: stack.map(c => charToNum[c]),
                            operation: 'pop',
                            description: `Matched '${top}' with '${char}'. Popped from stack.`
                        };
                    } else {
                        yield {
                            type: 'stack',
                            stack: stack.map(c => charToNum[c]),
                            operation: 'none',
                            description: `Error: Mismatch! Expected closing for '${top}', found '${char}'.`
                        };
                        return;
                    }
                }
            }

            if (stack.length === 0) {
                yield {
                    type: 'stack',
                    stack: [],
                    operation: 'none',
                    description: "Success! String is valid."
                };
            } else {
                yield {
                    type: 'stack',
                    stack: stack.map(c => charToNum[c]),
                    operation: 'none',
                    description: "Error! Stack not empty. Invalid."
                };
            }
        }
    }
];
