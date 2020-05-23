function _reverse (head) {
    
    let recordHead = null

    function reverse (head) {
        if (head === null || head.next === null) {
            recordHead = head
            return 
        }

        reverse(head)
        head.next.next = head
        head.next = null

    }

    reverse(head)
    return recordHead
}