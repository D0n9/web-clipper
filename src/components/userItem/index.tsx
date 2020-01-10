import React from 'react';
import * as styles from './index.scss';
import IconAvatar from '@/components/avatar';

interface UserItemProps {
  avatar: string;
  icon: string;
  name: string;
  description?: string;
}

const UserItem: React.FC<UserItemProps> = props => {
  return (
    <div className={styles.userItem}>
      <IconAvatar size="large" avatar={props.avatar} icon={props.icon} />
      <div className={styles.userItemInfo}>
        <div>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

export default UserItem;
