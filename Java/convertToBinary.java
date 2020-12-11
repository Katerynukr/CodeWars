package Java;

public class convertToBinary {
    public static int toBinary(int num) {
        String str = "";
        while(num > 0)
          {
             int y = num % 2;
             str = y + str;
             num = num / 2;
          }
        return Integer.parseInt(str);
      }
}
