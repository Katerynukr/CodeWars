package Java;

public class squareSum {
    public static int squareSum(int[] n)
    { 
     int sum = 0;
     for(int i = 0; i < n.length; i++){
       sum += Math.pow(n[i], 2);
       System.out.println(sum);
     }
      
       return sum;
    }
}
