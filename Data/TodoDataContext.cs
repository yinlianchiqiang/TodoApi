using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext(DbContextOptions<TodoDataContext> options) : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
