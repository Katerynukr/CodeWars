package Java;

public class tidyNumber {
    public static boolean tidyNumber(int number)
    {
      int num = number;
      while (num != 0){
        int last = num % 10;
        int preLast = (num / 10) % 10;
        if (preLast > last )
          return false;
        num /= 10;
      }
      return true;
      
    }
}
