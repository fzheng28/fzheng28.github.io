import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CNNTrainingTutorial = () => {
  return (
    <BlogPost
      title="Action Recognition CNN Training Tutorial"
      date="Jan 21, 2025"
      image="/images/cnn-training.png"
      content={
        <div>
          <p className="mb-4">
            Action recognition is the task of taking a video and outputting a label that describes what's happening.
            For example, is someone running, jumping, or waving? This capability has broad applications across industries.
            In healthcare, it can help monitor patients during physical therapy sessions. In gaming, it drives
            gesture-based controls or enhances virtual reality experiences. In manufacturing, it can ensure safety
            compliance or detect anomalies in automated processes.
          </p>
          
          <p className="mb-4">
            In this post, we'll guide you through training a convolutional neural network (CNN) to recognize various
            actions in short video clips. We'll use HMDB51, one of the most popular datasets for action recognition,
            to build and train our model. Along the way, we'll also discuss practical tips on processing video data
            and choosing the right platform for training deep learning models.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Where to Train Your Model</h2>
          <p className="mb-4">
            When working with deep learning, deciding where to train your model is just as important as how you
            design the model itself. Training neural networks, especially for tasks like action recognition, is
            computationally expensive. Video data requires large storage capacity and extensive preprocessing,
            and the models often need GPUs (or TPUs) to train in a reasonable time frame. This makes cloud-based
            platforms an excellent option for most researchers and practitioners.
          </p>
          
          <p className="mb-4">
            One such platform is Google Colab, which offers free access to GPU-accelerated machines. It's incredibly
            beginner-friendly as it has no need to install complex dependencies on your local machine. Just open
            a browser, set up your notebook, and start coding. Colab also integrates seamlessly with Google Drive,
            making it easy to save and retrieve your data, models, and outputs.
          </p>
          
          <p className="mb-4">
            However, Colab has its limitations. Sessions are temporary, with timeouts after a few hours, which
            means you might lose progress during extended training. Additionally, the resources are limited;
            you might only get access to mid-range GPUs like the Tesla T4, which are sufficient for small to
            medium-scale projects but may struggle with larger datasets and more complex models.
          </p>
          
          <p className="mb-4">
            For those needing more control and power, platforms like AWS EC2 offer pay-as-you-go cloud instances
            with high-end GPUs, but costs can add up quickly. Kaggle Kernels also provide free GPU compute with
            strict usage limits. Alternatively, if you have access to a high-performance workstation with a modern
            GPU, training locally could give you greater flexibility.
          </p>
          
          <p className="mb-4">
            For this project, we'll use Google Colab to demonstrate how to set up, train, and evaluate an action
            recognition model. It's a practical and accessible option for prototyping.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">The HMDB51 Dataset</h2>
          <p className="mb-4">
            HMDB51 is a classic benchmark dataset in human action recognition research. It was curated by the
            Serre Lab at Brown University and is widely used to evaluate new algorithms in this field. The dataset
            contains 7,000 video clips, each labeled with one of 51 distinct action classes, such as
            <code className="bg-orange-50 px-1 rounded"> smile</code>, <code className="bg-orange-50 px-1 rounded">ride_bike</code>, <code className="bg-orange-50 px-1 rounded">fencing</code>, and <code className="bg-orange-50 px-1 rounded">pushup</code>. The videos are
            short, typically lasting a few seconds, and were collected from movies, YouTube clips, and other
            publicly available sources.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Project Overview</h2>
          <p className="mb-4">Here's the high-level pipeline:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Data Processing</strong>: We download HMDB51 and extract videos in each action.</li>
            <li><strong>Frame Extraction</strong>: We break each video into individual images (frames).</li>
            <li><strong>Dataset Construction</strong>: We store images for each video in a dedicated folder, then create a label dictionary mapping each video to its action class.</li>
            <li><strong>CNN Architecture</strong>: We adopt a 3D CNN (or a 2D CNN for single frames, whichever you prefer). In this post, we'll illustrate a short clip approach but you can easily adapt it.</li>
            <li><strong>Training</strong>: We feed the network our labeled frames, compute a loss, and optimize.</li>
            <li><strong>Evaluation</strong>: We check how well the model predicts the correct action on test clips.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">1. Data Processing</h2>
          <p className="mb-4">
            The first step in preparing the HMDB51 dataset is to download and extract it into a convenient directory,
            then organize the videos by extracting them from <code className="bg-orange-50 px-1 rounded">.rar</code> archives. Since we're working in
            Google Colab, you can mount your Drive for persistent storage using:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`from google.colab import drive
drive.mount('/content/drive')`}
            </code>
          </pre>
          
          <p className="mb-4">
            After mounting, install the <code className="bg-orange-50 px-1 rounded">unrar</code> tool and create a directory named <code className="bg-orange-50 px-1 rounded">/content/hmdb51</code>
            where we can place our dataset. We then download the <code className="bg-orange-50 px-1 rounded">.rar</code> file of HMDB51 and extract it in place:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`!apt-get install -y unrar
!mkdir -p /content/hmdb51
!wget -P /content/hmdb51 http://serre-lab.clps.brown.edu/wp-content/uploads/2013/10/hmdb51_org.rar
!unrar x /content/hmdb51/hmdb51_org.rar /content/hmdb51`}
            </code>
          </pre>
          
          <p className="mb-4">
            This dataset contains multiple <code className="bg-orange-50 px-1 rounded">.rar</code> archives inside it, each corresponding to different actions.
            We want to have all the <code className="bg-orange-50 px-1 rounded">.avi</code> files consolidated in a single directory for ease of handling. To
            accomplish this, we can walk through each <code className="bg-orange-50 px-1 rounded">.rar</code> file, extract it, move all <code className="bg-orange-50 px-1 rounded">.avi</code> files
            to a dedicated folder called <code className="bg-orange-50 px-1 rounded">/content/hmdb51_videos</code>, and then clean up any temporary files.
            Below is a helper function <code className="bg-orange-50 px-1 rounded">move_avi_files()</code> that does the job:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`import os
import shutil
import subprocess

rar_dir = "/content/hmdb51"
videos_dir = "/content/hmdb51_videos"
os.makedirs(videos_dir, exist_ok=True)

temp_dir = "/content/temp_extract"
os.makedirs(temp_dir, exist_ok=True)

def move_avi_files(source_dir, target_dir):
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            if file.endswith(".avi"):
                src_path = os.path.join(root, file)
                dest_path = os.path.join(target_dir, file)
                shutil.move(src_path, dest_path)

for rar_file in os.listdir(rar_dir):
    if rar_file.endswith(".rar"):
        rar_path = os.path.join(rar_dir, rar_file)
        subprocess.run(["unrar", "x", rar_path, temp_dir])
        move_avi_files(temp_dir, videos_dir)
        # Clean up the temporary folder after extraction
        for temp_file in os.listdir(temp_dir):
            temp_file_path = os.path.join(temp_dir, temp_file)
            if os.path.isdir(temp_file_path):
                shutil.rmtree(temp_file_path)
            else:
                os.remove(temp_file_path)`}
            </code>
          </pre>
          
          <p className="mb-4">
            Once you've organized your <code className="bg-orange-50 px-1 rounded">.avi</code> files, it's time to create train/test splits based on the
            official HMDB51 split files. We download these splits, extract them, then read each text file to see
            which videos go into train or test. We build dictionaries (<code className="bg-orange-50 px-1 rounded">action_train_dict</code> and
            <code className="bg-orange-50 px-1 rounded">action_test_dict</code>) that map each action to a list of associated videos:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`!mkdir -p /content/hmdb51/splits
!wget -P /content/hmdb51/splits http://serre-lab.clps.brown.edu/wp-content/uploads/2013/10/test_train_splits.rar
!unrar x /content/hmdb51/splits/test_train_splits.rar /content/hmdb51/splits

import glob

splits_dir = "/content/hmdb51/splits/testTrainMulti_7030_splits"
split_num = 1

split_pattern = os.path.join(splits_dir, f"*_test_split{split_num}.txt")
split_files = glob.glob(split_pattern)
action_train_dict = {}
action_test_dict = {}

for split_file in split_files:
    base_name = os.path.basename(split_file)
    action = base_name.split("_test_split")[0]

    train_list = []
    test_list = []

    with open(split_file, 'r') as f:
        for line in f:
            video_name, split_id = line.strip().split()
            split_id = int(split_id)

            if split_id == 1:
                train_list.append(video_name)
            elif split_id == 2:
                test_list.append(video_name)

    action_train_dict[action] = train_list
    action_test_dict[action] = test_list

for action in sorted(action_train_dict.keys()):
    print(f"Action: {action} | Train: {len(action_train_dict[action])}, Test: {len(action_test_dict[action])}")`}
            </code>
          </pre>
          
          <p className="mb-4">
            Since we're just demonstrating, we won't train on all 51 actions. Instead, we pick three:
            <code className="bg-orange-50 px-1 rounded">hit</code>, <code className="bg-orange-50 px-1 rounded">shoot_gun</code>, and <code className="bg-orange-50 px-1 rounded">walk</code>:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`selected_actions = ["hit", "shoot_gun", "walk"]
shorten_action_train_dict = {key: action_train_dict[key] for key in selected_actions}
action_train_list = list(shorten_action_train_dict.values())
action_train_list = [item for sublist in action_train_list for item in sublist]

shorten_action_test_dict = {key: action_test_dict[key] for key in selected_actions}
action_test_list = list(shorten_action_test_dict.values())
action_test_list = [item for sublist in action_test_list for item in sublist]`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">2. Frame Extraction</h2>
          <p className="mb-4">
            Once we know which videos to use, we convert each <code className="bg-orange-50 px-1 rounded">.avi</code> file into individual frames.
            3D CNNs typically consume sequences of images, so extracting frames with
            <code className="bg-orange-50 px-1 rounded">ffmpeg</code> is standard. We resize frames to <code className="bg-orange-50 px-1 rounded">224×224</code> at 30 FPS and store them
            in separate folders named after each video's base name:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`!mkdir -p /content/hmdb51_frames

import os

video_dir = "/content/hmdb51_videos"
frames_root = "/content/hmdb51_frames"

BATCH_SIZE = 100
FPS = 30
RESIZE_WIDTH = 224
RESIZE_HEIGHT = 224

selected_videos = action_train_list + action_test_list
all_videos = [
    os.path.join(video_dir, video) for video in selected_videos
    if os.path.exists(os.path.join(video_dir, video))
]

all_videos.sort()

for i in range(0, len(all_videos), BATCH_SIZE):
    batch_videos = all_videos[i : i + BATCH_SIZE]
    for video_path in batch_videos:
        base_name = os.path.splitext(os.path.basename(video_path))[0]
        out_dir = os.path.join(frames_root, base_name)
        os.makedirs(out_dir, exist_ok=True)

        cmd = f"""
        ffmpeg -y -i "{video_path}" -vf "fps={FPS},scale={RESIZE_WIDTH}:{RESIZE_HEIGHT}" \\
        "{out_dir}/frame_%04d.jpg"
        """
        os.system(cmd)`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">3. Dataset Construction</h2>
          <p className="mb-4">
            With frames ready, we build a PyTorch <code className="bg-orange-50 px-1 rounded">Dataset</code> that loads short clips (e.g., 16 frames)
            plus labels. We first create a label dictionary mapping each video folder to an integer, stripping
            the <code className="bg-orange-50 px-1 rounded">.avi</code> extension so folder names match:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`reversed_action_train_dict = {
    action: file for file, actions in shorten_action_train_dict.items() for action in actions
}
reversed_action_test_dict = {
    action: file for file, actions in shorten_action_test_dict.items() for action in actions
}
label_dict = reversed_action_train_dict | reversed_action_test_dict
label_dict = {key[:-4]: value for key, value in label_dict.items()}

unique_actions = sorted(list(set(label_dict.values())))
numerical_labels = {action: i for i, action in enumerate(unique_actions)}

label_dict = {key: numerical_labels[value] for key, value in label_dict.items()}

train_videos = [value[:-4] for value in action_train_list] 
test_videos = [value[:-4] for value in action_test_list]`}
            </code>
          </pre>
          
          <p className="mb-4">
            We then define <code className="bg-orange-50 px-1 rounded">HMDB51FramesDataset</code>, which reads the image files, selects 16 consecutive
            frames, applies optional transforms, and returns a stacked tensor plus a label:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`import random
import cv2
import torch
from torch.utils.data import Dataset

class HMDB51FramesDataset(Dataset):
    def __init__(self, frames_dir, video_list, label_dict, clip_len=16, transform=None):
        self.frames_dir = frames_dir
        self.video_list = video_list
        self.label_dict = label_dict
        self.clip_len = clip_len
        self.transform = transform

    def __len__(self):
        return len(self.video_list)

    def __getitem__(self, idx):
        video_name = self.video_list[idx]
        label = self.label_dict[video_name]
        
        folder_path = os.path.join(self.frames_dir, video_name)
        all_frames = sorted([f for f in os.listdir(folder_path) if f.endswith('.jpg')])

        total_frames = len(all_frames)
        if total_frames < self.clip_len:
            indices = [0] * (self.clip_len - total_frames) + list(range(total_frames))
        else:
            start = random.randint(0, total_frames - self.clip_len)
            indices = list(range(start, start + self.clip_len))

        frames = []
        for i in indices:
            frame_path = os.path.join(folder_path, all_frames[i])
            img = cv2.imread(frame_path)
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            if self.transform is not None:
                import PIL.Image
                img = PIL.Image.fromarray(img)
                img = self.transform(img)
            else:
                img = torch.from_numpy(img).permute(2,0,1).float()

            frames.append(img)

        # Stack into [clip_len, C, H, W], then permute -> [C, clip_len, H, W]
        frames = torch.stack(frames, dim=0)
        frames = frames.permute(1, 0, 2, 3)

        return frames, label`}
            </code>
          </pre>
          
          <p className="mb-4">
            Finally, we create <code className="bg-orange-50 px-1 rounded">DataLoader</code> objects for the training and test sets. We define a
            transform pipeline to resize, center crop, and convert frames to tensors. Note we shuffle the
            training set only:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`import torchvision.transforms as T
from torch.utils.data import DataLoader

transform_3d = T.Compose([
    T.Resize((128,128)),
    T.CenterCrop((112,112)),
    T.ToTensor(),
])

train_dataset = HMDB51FramesDataset(
    frames_dir, train_videos, label_dict, clip_len=16, transform=transform_3d
)
test_dataset = HMDB51FramesDataset(
    frames_dir, test_videos, label_dict, clip_len=16, transform=transform_3d
)

train_loader = DataLoader(train_dataset, batch_size=2, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=2, shuffle=False)`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">4. CNN Architecture</h2>
          <p className="mb-4">
            We'll use ResNet-18 3D (<code className="bg-orange-50 px-1 rounded">r3d_18</code>) from <code className="bg-orange-50 px-1 rounded">torchvision.models.video</code>,
            pretrained on Kinetics. We simply replace the final FC layer to match our 3 classes
            (<code className="bg-orange-50 px-1 rounded">hit</code>, <code className="bg-orange-50 px-1 rounded">shoot_gun</code>, <code className="bg-orange-50 px-1 rounded">walk</code>):
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`import torch
import torch.nn as nn
from torchvision.models.video import r3d_18

model = r3d_18(pretrained=True)
num_classes = 3
model.fc = nn.Linear(model.fc.in_features, num_classes)`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">5. Training</h2>
          <p className="mb-4">
            We move the model to GPU (if available) and pick <code className="bg-orange-50 px-1 rounded">Adam</code> plus a cross-entropy loss:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`import torch.optim as optim

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

optimizer = optim.Adam(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()`}
            </code>
          </pre>
          
          <p className="mb-4">
            We then run our training loop. For each batch, we forward pass, compute loss, backprop, and update.
            Below, we only run 1 epoch for demonstration, but you'd typically increase this for better performance:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`for epoch in range(1):
    model.train()
    for i, (clips, labels) in enumerate(train_loader):
        clips = clips.to(device)
        labels = torch.tensor(labels).to(device)
        optimizer.zero_grad()

        outputs = model(clips)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        if i % 10 == 0:
            print(f"Epoch {epoch}, Step {i}, Loss = {loss.item():.4f}")`}
            </code>
          </pre>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">6. Evaluation</h2>
          <p className="mb-4">
            To measure performance, we switch the model to eval mode, loop through the test loader
            without computing gradients, and track how many predictions are correct:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`model.eval()
correct = 0
total = 0

with torch.no_grad():
    for clips, labels in test_loader:
        clips = clips.to(device)
        labels = labels.to(device)
        outputs = model(clips)
        _, predicted = outputs.max(1)
        correct += (predicted == labels).sum().item()
        total += labels.size(0)

print(f"Test Accuracy: {correct / total * 100:.2f}%")`}
            </code>
          </pre>
          
          <p className="mb-4">
            If you'd like to see which samples are misclassified:
          </p>
          
          <pre className="bg-orange-50/50 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
            <code className="language-python">
{`incorrect_samples = []
model.eval()
with torch.no_grad():
    for clips, labels in test_loader:
        clips = clips.to(device)
        labels = labels.to(device)
        outputs = model(clips)
        _, predicted = outputs.max(1)

        for idx in range(labels.size(0)):
            if predicted[idx] != labels[idx]:
                sample_info = {
                    "video": "<video_name_if_stored>",
                    "predicted_label": predicted[idx].item(),
                    "true_label": labels[idx].item()
                }
                incorrect_samples.append(sample_info)`}
            </code>
          </pre>
          
          <p className="mb-4">
            At this point, you have a complete pipeline for HMDB51 action recognition—starting from
            downloading the data, extracting frames, constructing a 3D CNN dataset in PyTorch,
            defining a 3D ResNet-18 model, training on a small subset, and finally evaluating performance
            on a test split. You can easily adapt it to all 51 actions, tweak hyperparameters, or add
            augmentations for improved generalization.
          </p>

          <div className="mt-12 border-t border-orange-200 pt-6">
            <h3 className="text-xl font-bold text-orange-800 mb-4 font-space">Other Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/blog/machine-learning-crispr" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Machine Learning for CRISPR</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/crispr-training-data" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">CRISPR Training Data</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/reflections-broad-institute" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Reflections on My Time at the Broad Institute</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/biome" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">BioMe's Value Proposition</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CNNTrainingTutorial;
