/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    
    
    let quick = head
    let slow = head
    let count = 0
    while (quick !== null) {
        // console.log('bug')
        
        quick = quick.next
        if (++count >= k+1) {
            slow = slow.next
        }
    }

    return count < k ? undefined : slow
}

function ListNode (x) {
    this.val = x
    this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

console.log(FindKthToTail(head, 3))

