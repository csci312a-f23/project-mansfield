import { useSession } from "next-auth/react";
import PastBets from "@/components/past/PastBets";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

export default function BetHistory() {
  const [pastBets, setPastBets] = useState([]);
  const { data: session } = useSession({
    required: true,
  });
  
  const balance = 1000;

  useEffect(() => {
    console.log("Session: ,", session);
    if (session && session.user) {
      (async () => {
      const response = await fetch(`/api/${session.user.id}/history`);
      if (response.ok) { 
        const data = await response.json();
        console.log("API Data: ", data);
        setPastBets(Object.values(pastBets));
      }
      })();
    }
  }, [session]);
    
  /*
  useEffect(() => {
    const fetchBetHistory = async () => { 
      try { 
        const response = await fetch(`/api/${session.user.id}/history`);
        const data = await response.json();
        console.log(data);
        setPastBets(data);
      } catch (error) { 
        console.error("Cannot fetch bet history:", error);
      }
    };
  });
  */

  return (
    session && (
      <div>
        <Navbar balance={session.user.balance} user={session.user.name} />
        <PastBets pastBets={pastBets} />
      </div>
    )
  );
}
