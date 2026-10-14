namespace TodoApi.Models
{
    public class Todo
    {
        // 一筆待辦事項
        // 包含：序號、標題·是否完成
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public bool IsComplete { get; set; }
    }
}
