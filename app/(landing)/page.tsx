import { Button } from "@/components/ui/button";
import  Link  from "next/link";

const LandingPage = () => {
  return (
    <>
      <Link href="/sign-in">
        <Button>
          sign in
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
          sign up
        </Button>
      </Link>
    </>
  );
}

export default LandingPage;