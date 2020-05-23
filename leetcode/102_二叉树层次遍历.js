/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    if (!root) {
        return result
    }

    result[0] = result[0] || []
    result[0].push(root.val)
    
    function _levelOrder (node, level) {
        if (!node) {
            return
        }
        if (node.left) {
            result[level] = result[level] || []
            result[level].push(node.left.val)
            _levelOrder(node.left, level+1)
        }
        if (node.right) {
            result[level] = result[level] || []
            result[level].push(node.right.val)
            _levelOrder(node.right, level+1)
        }
    }

    _levelOrder(root, 1)

    return result
};