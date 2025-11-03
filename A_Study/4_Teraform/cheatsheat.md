
Perfect 😎 — here’s a **complete Terraform cheat sheet** built specially for a **DevOps Engineer** — it covers **commands, concepts, workflows, file structures, variables, modules, backends, and best practices**.

---

## 🧭 **TERRAFORM CHEAT SHEET (DevOps Edition)**

---

### 🧱 1. BASIC CONCEPTS

| Concept                              | Description                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| **Provider**                         | Plugin that lets Terraform talk to a cloud/service (e.g., AWS, Azure, OCI, GitHub, etc.) |
| **Resource**                         | A single infrastructure object (VM, VPC, DB, etc.)                                       |
| **Data Source**                      | Reads info from existing resources without creating new ones                             |
| **Variable**                         | Input values used in Terraform configs                                                   |
| **Output**                           | Values you want Terraform to show after deployment                                       |
| **State File** (`terraform.tfstate`) | Stores current infrastructure status                                                     |
| **Backend**                          | Defines where Terraform state is stored (local, S3, OCI bucket, etc.)                    |
| **Module**                           | A reusable collection of Terraform configurations                                        |
| **Provisioner**                      | Executes scripts or commands on created resources                                        |

---

### ⚙️ 2. DIRECTORY STRUCTURE

```
terraform-project/
├── main.tf          # main configuration (resources)
├── variables.tf     # variables definitions
├── outputs.tf       # output values
├── provider.tf      # provider setup (AWS, OCI, etc.)
├── terraform.tfvars # variable values (secrets in .gitignore)
└── modules/         # reusable infra modules
```

---

### 💻 3. TERRAFORM COMMANDS

| Command                            | Description                                                 |
| ---------------------------------- | ----------------------------------------------------------- |
| `terraform init`                   | Initialize a Terraform project (downloads provider plugins) |
| `terraform validate`               | Check syntax and structure for errors                       |
| `terraform fmt`                    | Format configuration files                                  |
| `terraform plan`                   | Preview the changes Terraform will make                     |
| `terraform apply`                  | Apply and create/update infrastructure                      |
| `terraform destroy`                | Delete all infrastructure defined in the config             |
| `terraform show`                   | Display state or plan                                       |
| `terraform output`                 | Show output variables                                       |
| `terraform providers`              | List providers used in configuration                        |
| `terraform state list`             | List resources in the state file                            |
| `terraform state show <resource>`  | Show details of a specific resource                         |
| `terraform taint <resource>`       | Mark a resource for recreation                              |
| `terraform untaint <resource>`     | Remove taint from a resource                                |
| `terraform import <resource> <id>` | Import an existing resource into Terraform state            |
| `terraform graph`                  | Visualize resource dependencies                             |
| `terraform version`                | Show current Terraform version                              |
| `terraform workspace list`         | Manage multiple environments (dev/staging/prod)             |

---

### ⚗️ 4. VARIABLE TYPES & SYNTAX

**Declare a variable**

```hcl
variable "region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}
```

**Use it**

```hcl
provider "aws" {
  region = var.region
}
```

**Pass value**

```bash
terraform apply -var="region=us-east-1"
```

**In terraform.tfvars**

```hcl
region = "us-east-1"
```

---

### 🧩 5. OUTPUTS

```hcl
output "instance_ip" {
  value = aws_instance.web.public_ip
}
```

After `terraform apply`:

```bash
terraform output instance_ip
```

---

### 🧮 6. DATA SOURCES

Fetch existing data without creating:

```hcl
data "aws_ami" "latest" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*"]
  }
}
```

---

### 📦 7. MODULES

Reusability = Modules

**Usage:**

```hcl
module "vpc" {
  source = "./modules/vpc"
  cidr_block = "10.0.0.0/16"
}
```

**Module folder example:**

```
modules/
└── vpc/
    ├── main.tf
    ├── variables.tf
    └── outputs.tf
```

You can also use **public modules**:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"
}
```

---

### ☁️ 8. BACKENDS (Remote State)

Example: **S3 backend**

```hcl
terraform {
  backend "s3" {
    bucket = "my-tf-state-bucket"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}
```

**OCI example:**

```hcl
terraform {
  backend "oci" {
    bucket = "tf-state"
    namespace = "my-namespace"
    region = "ap-mumbai-1"
  }
}
```

---

### 🔐 9. TERRAFORM WORKSPACES

Used for managing multiple environments (dev/staging/prod) from one config.

```bash
terraform workspace new dev
terraform workspace select dev
terraform workspace list
terraform workspace show
```

---

### 🧠 10. LIFECYCLE RULES

Control how Terraform handles resource changes.

```hcl
resource "aws_instance" "app" {
  ami           = "ami-0abcd"
  instance_type = "t2.micro"

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [tags]
  }
}
```

---

### 🧰 11. COMMON USE CASES (DevOps)

| Use Case                    | Terraform Resource/Feature                        |
| --------------------------- | ------------------------------------------------- |
| Create VMs                  | `aws_instance`, `oci_core_instance`, etc.         |
| Create VPCs/Subnets         | `aws_vpc`, `aws_subnet`                           |
| Setup Load Balancers        | `aws_lb`, `oci_load_balancer`                     |
| Deploy Kubernetes Cluster   | `aws_eks_cluster`, `google_container_cluster`     |
| Integrate with CI/CD        | Terraform in GitHub Actions, Jenkins, GitLab CI   |
| Manage Secrets              | With `vault` provider or external secrets manager |
| Create IAM Roles & Policies | `aws_iam_role`, `aws_iam_policy`                  |

---

### 🧹 12. BEST PRACTICES

✅ Use **Remote State + Locking** (S3 + DynamoDB / OCI bucket)
✅ Use **Workspaces** for environments
✅ Store **secrets** in a vault, not in `.tfvars`
✅ Format and validate regularly (`terraform fmt && terraform validate`)
✅ Use **modules** for reusable infra
✅ Use **versioned providers**
✅ Add `.terraform` & `*.tfstate*` to `.gitignore`
✅ Review `terraform plan` before `apply`
✅ Run **Terraform in CI/CD pipelines** (GitHub Actions, Jenkins, GitLab CI)

---

### 🧩 13. SAMPLE WORKFLOW (AWS Example)

```bash
# 1️⃣ Initialize
terraform init

# 2️⃣ Check syntax
terraform validate

# 3️⃣ Preview plan
terraform plan -out=tfplan

# 4️⃣ Apply changes
terraform apply tfplan

# 5️⃣ Check outputs
terraform output

# 6️⃣ Destroy infra (if needed)
terraform destroy
```

---

### ⚡ 14. USEFUL PLUGINS / TOOLS

| Tool                 | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| **tflint**           | Lint Terraform code                                |
| **terraform-docs**   | Auto-generate documentation from `.tf` files       |
| **pre-commit hooks** | Run format/lint before commits                     |
| **Terragrunt**       | Wrapper for Terraform for DRY multi-env management |
| **Atlantis**         | Automate Terraform in PRs (GitOps style)           |

---

Would you like me to create a **printable PDF version** of this cheat sheet (dark or light theme)? It’s perfect to keep as a DevOps quick reference.
