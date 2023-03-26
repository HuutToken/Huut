import React from 'react'
import moment from 'moment'

import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import { deleteComment } from '../../actions/post'

const DisplayComment = ({ post, handleShare }) => {

    const User = useSelector((state) => state.currentUserReducer)
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleDelete = (commentId, noOfComments) => {
        dispatch(deleteComment(id, commentId, noOfComments - 1))
    }

  return (
    <div>
        {
            post.comment.map((com) => (
                <div className="display-com" key={com._id}>
                    <p>{com.commentBody}</p>
                    <div className="post-actions-user">
                        <div>
                            <button type="button" onClick={handleShare}>Share</button>
                            {
                                User?.result?._id === com?.userId && (
                                    <button type='button' onClick={() => handleDelete(com._id, post.noOfComments )}>Delete</button>
                                )
                            }
                        </div>
                        <div>
                            <p>Commented {moment(com.commentedOn).fromNow()}</p>
                            <Link to={`/Users/${com.userId}`} className='user-link' style={{color:'#00fff6'}}>
                                <Avatar backgroundColor="#11f9d7" px='8px' py='5px'>{com.userCommented.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {com.userCommented}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayComment