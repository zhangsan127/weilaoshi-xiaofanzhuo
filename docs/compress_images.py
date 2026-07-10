"""批量压缩小饭桌宣传页图片 —— 分辨率压缩 + PNG转JPG"""
import os
from PIL import Image

IMG_DIR = os.path.join(os.path.dirname(__file__), "小饭桌广告素材")
MAX_WIDTH = 1200  # 网页最大显示宽度
QUALITY = 82      # JPEG 压缩质量 (够清晰但体积小)

def compress_file(filepath):
    name = os.path.basename(filepath)
    size_kb = os.path.getsize(filepath) / 1024

    img = Image.open(filepath)

    # 如果图片太宽，等比缩小
    w, h = img.size
    if w > MAX_WIDTH:
        new_h = int(h * MAX_WIDTH / w)
        img = img.resize((MAX_WIDTH, new_h), Image.LANCZOS)
        print(f"  ↳ {name}: {w}×{h} → {MAX_WIDTH}×{new_h}")

    # 转 RGB（PNG 可能有透明通道）
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    # 保存为 JPG
    new_path = filepath.rsplit(".", 1)[0] + ".jpg"
    img.save(new_path, "JPEG", quality=QUALITY, optimize=True)

    new_size = os.path.getsize(new_path) / 1024
    ratio = (1 - new_size / size_kb) * 100
    print(f"  ✓ {os.path.basename(new_path)}: {size_kb:.0f}KB → {new_size:.0f}KB ({ratio:.0f}% 压缩)")
    return new_path

# 处理菜品图片
food_dir = IMG_DIR
print("🍱 处理菜品图片...")
for f in sorted(os.listdir(food_dir)):
    if f.lower().endswith((".jpg", ".jpeg", ".png")):
        src = os.path.join(food_dir, f)
        dest = compress_file(src)
        # PNG 原图删掉
        if f.lower().endswith(".png") and src != dest:
            os.remove(src)
            print(f"  🗑 删除原PNG: {f}")

# 处理环境子文件夹
env_dir = os.path.join(IMG_DIR, "环境")
if os.path.exists(env_dir):
    print("\n🏡 处理环境图片...")
    for f in sorted(os.listdir(env_dir)):
        if f.lower().endswith((".jpg", ".jpeg", ".png")):
            src = os.path.join(env_dir, f)
            dest = compress_file(src)
            if f.lower().endswith(".png") and src != dest:
                os.remove(src)
                print(f"  🗑 删除原PNG: {f}")

print("\n✅ 全部压缩完成！")
