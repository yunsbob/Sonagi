import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { addMeetingType, modifyMeetingType, roomType, userType } from './types';

export const getAllMeetings = async () => {
  try {
    const { data } = await axios.get(`sonagi.com/meetings/all`, {});
    return data;
  } catch (err) {
    throw new Error('r');
  }
};
