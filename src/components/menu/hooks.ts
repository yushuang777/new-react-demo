import { useNavigate } from 'react-router-dom';
import { CustomRouteObject } from '../../route';

export default function useHook() {
  const navigate = useNavigate();
  const handleJump = (item: CustomRouteObject) => {
    navigate(item.path);
  };
  return {
    handleJump,
  };
}
