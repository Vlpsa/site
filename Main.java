
public class Main {
    public static void main (String[] args)
    {
        System.out.println(multiply("2","6"));
    }

    public static String multiply(String num1, String num2) {
    String ans="";
        for(int i = num1.length; i > 0; i--){
            for(int j = num2.length; j > 0; j--){
                int calc = chartoint(num1.charAt(i)) * chartoint(num2.charAt(j));
                
            }
        }
    }
    

    private static int toint(char ch){
        if(ch == "1")
            return 1;
        if(ch == "2")
            return 2;
        if(ch == "3")
            return 3;
        if(ch == "4")
            return 4;
        if(ch == "5")
            return 5;
        if(ch == "6")
            return 6;
        if(ch == "7")
            return 7;
        if(ch == "8")
            return 8;
        if(ch == "9")
            return 9;
        if(ch == "0")
            return 0;
        return null;
    }
}
