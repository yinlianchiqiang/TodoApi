using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoDataContext _context;
        public TodoController(TodoDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Todo>> Get()
        {
            return await _context.Todos.ToListAsync();
        }

        // 這個方法會處理新增待辦事項的請求
        [HttpPost]
        public async Task<Todo> Post(Todo todo)
        {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            // 處理新增待辦事項的邏輯
            return todo;
        }
        // 這個方法會處理'更新'待辦事項的請求
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Todo todo)
        {
            var existingTodo = await _context.Todos.FindAsync(id);

            if (existingTodo == null)
            {
                return NotFound();
            }
            //因接上網頁API後，網頁回傳的值僅有IsComplete，Title為空值，若直接將Title更新會造成資料遺失，因此需判斷Title是否為空值
            //existingTodo.Title = todo.Title;
            existingTodo.IsComplete = todo.IsComplete;

            if(!string.IsNullOrEmpty(todo.Title))
            {
                existingTodo.Title = todo.Title;
            }

            await _context.SaveChangesAsync();

            return Ok(existingTodo);
        }
        // 這個方法會處理'刪除'待辦事項的請求
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            // 刪除資料
            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
