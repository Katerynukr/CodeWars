package Java;

public class gostCode {
    public static String helloName(final String name){
 
        if(name == null || name.equals(""))
          return "Hello world!";
        else
          return "Hello my name is " + name;
      }
}
