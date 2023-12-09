import { useSession } from "next-auth/react";
import PastBets from "@/components/past/PastBets";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

export default function BetHistory() {
  const [pastBets, setPastBets] = useState([]);
  const { data: session } = useSession({
    required: true,
  });


  

  const userId = session?.user?.id;
  console.log(session);

  const balance = 1000;

  // const pastBets = ({pastBets}) => { 

  // }


  
  
  useEffect(() => {
    const fetchBetHistory = async () => { 
      try { 
        const response = await fetch(`/api/${userId}/history`);
        const data = await response.json();
        console.log(data);
        setPastBets(data);
      } catch (error) { 
        console.error("Cannot fetch bet history:", error);
      }
    };

    if (userId) {
      fetchBetHistory();
    }
  }, [userId]);
  
  return (
    session && (
      <div>
        <Navbar balance={balance} user={session.user.name} />
        <PastBets pastBets={pastBets} />
      </div>
    )
  );
}
