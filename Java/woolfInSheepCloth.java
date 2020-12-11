package Java;

public class woolfInSheepCloth {
    public static String warnTheSheep(String[] array) {
        for(int i = array.length-1; i >= 0; i--){
          if(array[i]== "wolf" && i < array.length-1){
            int sheep = array.length - (i+1);
            return "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!";
          }
        }
        return "Pls go away and stop eating my sheep";
      }
}
