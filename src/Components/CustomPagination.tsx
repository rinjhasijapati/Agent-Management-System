import { Pagination } from "@mui/material";

interface CustomPaginationProps {
    page: number;
    count: number;
    onPageChange: (newPage: number) => void;
}

function CustomPagination({ page, count, onPageChange }: CustomPaginationProps) {
    return (
        <Pagination
            count={count}
            page={page}
            onChange={(_, newPage) => onPageChange(newPage)}
            variant="outlined"
            color="primary"
            siblingCount={0}
            boundaryCount={0}
            showFirstButton={false}
            showLastButton={false}
        />
    );
}

export default CustomPagination;
