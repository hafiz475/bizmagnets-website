import tarfile
import os

tar_path = r'e:\prasannasir\next-15.1.7.tgz'
dest_path = r'e:\prasannasir\node_modules\next'

os.makedirs(dest_path, exist_ok=True)

print("Extracting next-15.1.7.tgz directly via Python...")
with tarfile.open(tar_path, 'r:gz') as tar:
    for member in tar.getmembers():
        if member.name.startswith('package/'):
            rel_path = member.name[8:]
            if rel_path:
                target_file = os.path.join(dest_path, rel_path)
                if member.isdir():
                    os.makedirs(target_file, exist_ok=True)
                else:
                    os.makedirs(os.path.dirname(target_file), exist_ok=True)
                    with tar.extractfile(member) as source, open(target_file, 'wb') as target_out:
                        if source:
                            target_out.write(source.read())

print("EXTRACT SUCCESS:", os.path.exists(os.path.join(dest_path, 'package.json')))
