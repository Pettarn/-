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
    let cur = null
    let temp = null
    let recordHead = null

    while (true) {
        if (head === null) {
            return recordHead
        }
        
        temp = head.next // 保存了第二个节点
        if (temp === null) {
            head.next = recordHead
            recordHead = head
            return recordHead
        }
        cur = head.next.next // 保存了第三个节点。
        head.next.next = head
        head.next = recordHead
        recordHead = temp
        head = cur
  
    }

};