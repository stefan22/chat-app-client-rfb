import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -12,
    top: 0,
    padding: '0 4px',
  },
  
    
  
}))(Badge);

export default function LikeCountButton({likeCount,color}) {
  return (
      <StyledBadge
				badgeContent={likeCount} 
				color={color}>
      </StyledBadge>
  );
}