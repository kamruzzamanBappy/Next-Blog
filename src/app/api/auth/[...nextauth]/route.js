import connect from "@/app/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){

      await connect();

      try{
     const user = User.findOne({email:credentials.email});
     if(user){
//checked password
const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);

if(isPasswordCorrect){
  return user
}
else{
  throw new Error("Wrong Crdentials")
}



     }else{
throw new Error("user not found")
     }
    
    
    }
      catch(err){
        throw new Error(err);
      }


    }

    })



  ],
})

export { handler as GET, handler as POST };

