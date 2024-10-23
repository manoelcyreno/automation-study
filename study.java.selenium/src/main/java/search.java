public class search {
    
    private static int linearSearchIndex(int[] numbers, int target){
        int round = 0;
        for (int pointer = 0; pointer < numbers.length; pointer++) {
            round++;
            System.out.println("linearSearchIndex: " + round);

            if (numbers[pointer] == target) {
                return pointer;
            }
        }
        return -1;
    }

    private static int binarySearchIndex(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        int round = 0;

        while (left <= right) {
            round++;
            System.out.println("binarySearchIndex: " + round);

            int middle = left + (right-left)/2;

            if (numbers[middle] == target) {
                return middle;
            } else if (target > numbers[middle]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5,6,7,8,9};
        //int[] numbers = {1,2,4,5,3};
        int target = 9;
        
        System.out.println("On Linear Search: The target (" + target +") is present, and the index is: " + linearSearchIndex(numbers, target));
        System.out.println("On Binary Search: The target (" + target +") is present, and the index is: " + binarySearchIndex(numbers, target));
    }
}
