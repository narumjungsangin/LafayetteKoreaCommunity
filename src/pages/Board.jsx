import React, { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

const Board = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", author: "준수", content: "안녕하세요 반갑습니다!" },
    { id: 2, title: "두 번째 글", author: "테스트", content: "이건 예시 글이에요." }
  ]);
  const [form, setForm] = useState({ title: "", author: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), ...form };
    setPosts([newPost, ...posts]);
    setForm({ title: "", author: "", content: "" });
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">📋 게시판</h2>
        <form onSubmit={handleSubmit} className="mb-4 space-y-2">
          <input placeholder="제목" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="border p-2 w-full" />
          <input placeholder="작성자" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="border p-2 w-full" />
          <textarea placeholder="내용" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="border p-2 w-full" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">등록</button>
        </form>
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr><th className="border px-2 py-1">번호</th><th className="border px-2 py-1">제목</th><th className="border px-2 py-1">작성자</th><th className="border px-2 py-1">삭제</th></tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td className="border px-2 py-1">{posts.length - index}</td>
                <td className="border px-2 py-1">{post.title}</td>
                <td className="border px-2 py-1">{post.author}</td>
                <td className="border px-2 py-1"><button onClick={() => handleDelete(post.id)} className="text-red-600">삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Board;
