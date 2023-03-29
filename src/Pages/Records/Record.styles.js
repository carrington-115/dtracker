import styled from "styled-components";

const StyledRecordPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 1cm 0;
`;

const RecordListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  gap: 22px;
`;

export { StyledRecordPage, RecordListWrapper };
