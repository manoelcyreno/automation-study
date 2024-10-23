import java.util.ArrayList;

public class sumNumbers {

    private static void sumTwoNumbers(int[] nums, int target){
        ArrayList<Integer> numMap = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            numMap.add(nums[i]);
        }

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            ArrayList<Integer> temp = new ArrayList<>(numMap);

            temp.remove((Integer) nums[i]);

            if (temp.contains(complement)) {
                System.out.println("To receive the: "+ target + " Your number is: " + nums[i] + " and " + complement);
            } 

        }
    }
   public static void main(String[] args) {

    int[][] testCases = {
        {1, 3, 4, 2},
        {3, 2, 4}, 
        {3, 3}, 
        {5, 25, 75}, 
        {1, 2, 3, 4, 5}, 
        {10, 15, 3, 7}, 
        {1, 4, 6, 8, 10}, 
        {0, -1, 2, -3, 1} 
    };

    int[] targets = {6, 6, 6, 100, 7, 17, 14, -2};

    for (int i = 0; i < testCases.length; i++) {
        System.out.println("Index: " + i);
        sumTwoNumbers(testCases[i], targets[i]);
    }

   }
}
