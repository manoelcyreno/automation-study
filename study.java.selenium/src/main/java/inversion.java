public class inversion {

    private static String swapString(String text) {
        String newText = "";

        for (int i = text.length()-1; i >= 0; i--) {
            newText = newText+text.charAt(i);
        }

        return newText;
    }
    public static void main(String[] args) {
        String input = "testando";
        System.out.println(swapString(input));
    }
}
