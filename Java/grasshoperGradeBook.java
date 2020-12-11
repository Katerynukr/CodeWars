package Java;

public class grasshoperGradeBook {
    public static char getGrade(int s1, int s2, int s3) {
        int sum = (s1+s2+s3)/3;
        return sum >= 90 ? 'A' : sum>=80 ? 'B' : sum >=70 ? 'C' : sum >= 60 ? 'D' : 'F';
  //       if(sum <= 100 && sum >= 90 ){
  //         return 'A';
  //       } else if(sum < 90 && sum >= 80){
  //         return 'B';
  //       }else if(sum < 80 && sum >= 70){
  //         return 'C';
  //       }else if(sum < 70 && sum >= 60){
  //         return 'D';
  //       } else {
  //         return 'F';
  //       } 
      }
}
