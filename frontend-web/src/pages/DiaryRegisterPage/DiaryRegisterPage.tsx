import { useState } from 'react';
import Back from '@/components/atoms/Back/Back';
import * as S from '@/pages/DiaryRegisterPage/DiaryRegisterPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';

const FileUploadComponent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleFileChange = (event: any) => {
    const fileList: File[] = Array.from(event.target.files);
    setFiles(fileList);
  };
  return (
    <>
      <Back />
    </>
  );
};

export default FileUploadComponent;
