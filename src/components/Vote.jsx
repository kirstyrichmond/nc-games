// import React, { useState } from 'react';
// import { patchVote } from '../utils/api';
// import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

// const Vote = ({ vote, username }) => {
//     const [voteChange, setVoteChange] = useState(username.votes)

//     console.log(vote, "<< vote: vote.jsx")
//     console.log(voteChange, "<< vote change : vote.jsx");


//     const upVote = () => {
//         setVoteChange((currChange) => currChange + 1)
        
//         patchVote(username, vote).catch(() => {
//             setVoteChange((currChange) => currChange - 1)
//         })
//     }

//   return (
//     <div className='vote-container'>

//         <button onClick={() => upVote} >
//             <BsHandThumbsUp className='thumbs-up-outline' />
//         </button>
//         <div>
//             { vote + voteChange}
//         </div>
//         <button onClick={() => upVote} >
//             <BsHandThumbsDown className='thumbs-down-outline' />
//         </button>

//     </div>
//   )
// };

// export default Vote;
