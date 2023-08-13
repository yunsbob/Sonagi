import { ChangeEvent, useState, useRef, useEffect, useCallback } from 'react';
import * as S from '@/pages/DiaryRegisterPage/DiaryRegisterPage.styles';
import DiaryRecorder from '@/components/molecules/DiaryRecorder/DiaryRecorder';
import { Image } from '@/components/atoms/Image/Image';
import IconPlusBlueRectDash from '@/assets/images/icon-plus-blue-rect-dash.png';
import IconDeleteRedCircle from '@/assets/images/icon-delete-red-circle.png';
import { useNavigate } from 'react-router-dom';
import backArrow from '@/assets/images/icon-arrow-left-grey.png';
import Button from '@/components/atoms/Button/Button';
const DiaryRegisterPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fileList: File[] = event.target.files
      ? Array.from(event.target.files)
      : [];
    if (fileList.length !== 0) {
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        newFiles[index] = fileList[0];
        return newFiles;
      });
      event.target.value = '';
    }
  };
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleImageClick = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleRemoveImage = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const addFileInputRef = (ref: HTMLInputElement | null, index: number) => {
    if (ref) {
      fileInputRefs.current[index] = ref;
    }
  };
  const navigate = useNavigate();

  const RouteHandler = useCallback(() => navigate(-1), [navigate]);
  return (
    <>
      <S.DiaryRegisterContainer>
        <S.DiaryRegisterHeadContainer>
          <S.BackArrow onClick={RouteHandler}>
            <Image src={backArrow} width={1} />
          </S.BackArrow>
          <S.TitleText size="headSmall">육아일기 작성하기</S.TitleText>
        </S.DiaryRegisterHeadContainer>
        <S.DiaryRegisterBodyContainer>
          <DiaryRecorder></DiaryRecorder>
        </S.DiaryRegisterBodyContainer>
        <S.DiaryRegisterFileListContainer>
          {files.map((file, index) => (
            <S.DiaryRegisterWrapper key={index}>
              <Image
                src={file && URL.createObjectURL(file)}
                height={100}
                width={100}
                style={{ objectFit: 'cover' }}
                $unit="%"
                onClick={event => handleRemoveImage(index, event)}
              />
              <input
                type="file"
                onChange={event => {
                  handleFileChange(event, index);
                }}
                accept="image/*"
                ref={ref => addFileInputRef(ref, index)}
                style={{ display: 'none' }}
              />
            </S.DiaryRegisterWrapper>
          ))}
          {files.length < 4 && (
            <S.DiaryRegisterWrapper
              onClick={() => handleImageClick(files.length)}
            >
              <Image
                src={IconPlusBlueRectDash}
                height={100}
                width={100}
                $unit="%"
              />
              <input
                type="file"
                onChange={event => {
                  handleFileChange(event, files.length);
                }}
                accept="image/*"
                ref={ref => addFileInputRef(ref, files.length)}
                style={{ display: 'none' }}
              />
            </S.DiaryRegisterWrapper>
          )}
          <Button></Button>
        </S.DiaryRegisterFileListContainer>
      </S.DiaryRegisterContainer>
    </>
  );
};

export default DiaryRegisterPage;
