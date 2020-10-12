class Connect4{
    constructor(selector) {
        this.ROWS = 6;
        this.COLLUMS = 7;
        this.selector = selector;
        this.createGrid();
        this.setupEventListener();
    }

    createGrid(){
        const $board = $(this.selector);
        console.log($board);
        for (let row = 0; row < this.ROWS; row++){
            const $row = $('<div>')
                .addClass('row');
            for (let col = 0; col < this.COLLUMS; col++){
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', col)
                    .attr('data-row', row);
                $row.append($col);
            }
            $board.append($row);
        }
    }

    setupEventListener(){
        const $board = $(this.selector);


        $board.on('mouseenter','.col.empty', function () {
            const col = $(this).data('col');
            console.log(col)
        })
    }
}