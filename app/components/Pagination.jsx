import { Button, Flex, Text } from "@radix-ui/themes";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ itemCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  return (
    <Flex align="center" gap="3">
      <Text size='3'>
        Page {currentPage} of {pageCount}
      </Text>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button variant="soft" color="gray">
        <MdKeyboardArrowLeft />
      </Button>
      <Button variant="soft" color="gray">
        <MdKeyboardArrowRight />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <MdKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
