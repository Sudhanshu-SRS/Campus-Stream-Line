import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { mockApplications } from "../data/mockData";

import { useToast } from "../hooks/use-toast";
import { FileText, Eye, CheckCircle, XCircle } from "lucide-react";
import { cn } from "../lib/utils";

export default function Documents() {
  const { toast } = useToast();
  const [statusFilter, setStatusFilter] = useState("all");

  // Flatten all documents with applicant info
  const allDocuments = mockApplications.flatMap((app) =>
    app.documents.map((doc) => ({
      ...doc,
      applicantName: app.studentName,
      applicantId: app.id,
    })),
  );

  const [documents, setDocuments] = useState(allDocuments);

  const filteredDocuments = documents.filter(
    (doc) => statusFilter === "all" || doc.status === statusFilter,
  );

  const handleVerify = (docId) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === docId ? { ...doc, status: "verified" } : doc,
      ),
    );
    toast({
      title: "Document Verified",
      description: "The document has been marked",
    });
  };

  const handleReject = (docId) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === docId ? { ...doc, status: "rejected" } : doc,
      ),
    );
    toast({
      title: "Document Rejected",
      description: "The document has been marked",
      variant: "destructive",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "bg-status-accepted/20 text-status-accepted";
      case "rejected":
        return "bg-status-rejected/20 text-status-rejected";
      default:
        return "bg-status-pending/20 text-status-pending";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Document Verification
        </h1>
        <p className="text-muted-foreground">
          Review and verify applicant documents
        </p>
      </div>

      {/* Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="w-full sm:w-48">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Documents</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id}>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.applicantName} ({doc.applicantId})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium capitalize",
                      getStatusColor(doc.status),
                    )}
                  >
                    {doc.status}
                  </span>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </a>
                    </Button>
                    {doc.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          className="bg-status-accepted hover:bg-status-accepted/90"
                          onClick={() => handleVerify(doc.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Verify
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(doc.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredDocuments.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No documents found
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
