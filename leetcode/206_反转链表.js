/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let recordHead = null // 把末尾的节点存起来

    function reverse (head) {
        if (head === null || head.next === null) {
            recordHead = head
            return 
        }

        reverse(head.next)
        head.next.next = head
        head.next = null

    }

    reverse(head)
    return recordHead
};