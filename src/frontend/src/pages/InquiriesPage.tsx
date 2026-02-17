import { useInquiries } from '../hooks/useInquiries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, User, MessageSquare } from 'lucide-react';

export default function InquiriesPage() {
  const { data: inquiries, isLoading, error } = useInquiries();

  return (
    <div className="container mx-auto py-12 px-4 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Inquiries</h1>
          <p className="text-muted-foreground">View all submitted contact form inquiries</p>
        </div>

        {isLoading && (
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-20 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {error && (
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Error Loading Inquiries</CardTitle>
              <CardDescription>
                {error instanceof Error ? error.message : 'Failed to load inquiries'}
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        {!isLoading && !error && inquiries && inquiries.length === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>No Inquiries Yet</CardTitle>
              <CardDescription>
                Contact form submissions will appear here once received.
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        {!isLoading && !error && inquiries && inquiries.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>All Inquiries ({inquiries.length})</CardTitle>
              <CardDescription>
                Showing all contact form submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Name</TableHead>
                      <TableHead className="w-[250px]">Email</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            {inquiry.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a href={`mailto:${inquiry.email}`} className="hover:underline">
                              {inquiry.email}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <div className="flex items-start gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{inquiry.message}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="md:hidden space-y-4">
                {inquiries.map((inquiry, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {inquiry.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${inquiry.email}`} className="hover:underline">
                          {inquiry.email}
                        </a>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{inquiry.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
